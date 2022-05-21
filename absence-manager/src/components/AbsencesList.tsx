import { Component, ChangeEvent } from 'react'
import AbsenceDataService from '../services/absences'
import MemberDataService from '../services/members'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import Absences from './Absences'
import AbsenceHeader from './AbsencesHeader'
import FilterBar from './FilterBar'

type Props = Record<string, unknown>

type State = {
  absences: Array<IAbsenceData>,
  members: Array<IMemberData>,
  currentAbsence: IAbsenceData | null,
  currentIndex: number,
  query: string
}

export default class AbsencesList extends Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.onChangeSearchQuery = this.onChangeSearchQuery.bind(this)
    this.retrieveData = this.retrieveData.bind(this)
    this.refreshList = this.refreshList.bind(this)
    this.setActiveAbsence = this.setActiveAbsence.bind(this)
    this.searchQuery = this.searchQuery.bind(this)
    this.state = {
      absences: [],
      members: [],
      currentAbsence: null,
      currentIndex: -1,
      query: ''
    }
  }
  componentDidMount() {
    this.retrieveData()
  }
  onChangeSearchQuery(e: ChangeEvent<HTMLInputElement>) {
    const searchQuery = e.target.value
    this.setState({
      query: searchQuery
    })
  }
  retrieveData() {
    AbsenceDataService.getAll()
      .then((response) => {
        this.setState({
          absences: response.data
        })
        console.log(response.data)
      })
      .then(() => {
        MemberDataService.getAll()
          .then((response) => {
            this.setState({
              members: response.data
            })
            console.log(response.data)
          })
          .catch((e: Error) => {
            console.log(e)
          })
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }
  refreshList() {
    this.retrieveData()
    this.setState({
      currentAbsence: null,
      currentIndex: -1
    })
  }
  setActiveAbsence(absence: IAbsenceData, index: number) {
    this.setState({
      currentAbsence: absence,
      currentIndex: index
    })
  }
  searchQuery() {
    this.setState({
      currentAbsence: null,
      currentIndex: -1
    })
    AbsenceDataService.findByType(this.state.query)
      .then((response) => {
        this.setState({
          absences: response.data
        })
        console.log(response.data)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  render() {
    const { query, absences, members } = this.state

    if (absences.length === 0 || members.length === 0) {
      return (
        <div>
          loading...
        </div>
      )
    }

    return (
      <div>
        <div
          className='flex justify-center'
        >
          <FilterBar
            query={query}
            onChangeSearchQuery={this.onChangeSearchQuery}
            searchQuery={this.searchQuery}
          />
        </div>
        <div>
          <AbsenceHeader />
          <Absences
            absences={absences}
            members={members}
          />
        </div>
      </div>
    )
  }
}
