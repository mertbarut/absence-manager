import { Component, ChangeEvent } from 'react'
import AbsenceDataService from '../services/absences'
import MemberDataService from '../services/members'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import Absences from './Absences'
import AbsenceHeader from './AbsencesHeader'
import FilterBar from './FilterBar'
import LoadingNotification from './LoadingNotification'
import ErrorNotification from './ErrorNotification'

type Props = Record<string, unknown>

type State = {
  absences: Array<IAbsenceData>,
  members: Array<IMemberData>,
  currentAbsence: IAbsenceData | null,
  currentIndex: number,
  query: string,
  responseStatus: number,
  loading: boolean
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
      query: '',
      responseStatus: 0,
      loading: true
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
          absences: response.data,
          responseStatus: response.status
        })
        console.log(response.data)
      })
      .then(() => {
        MemberDataService.getAll()
          .then((response) => {
            this.setState({
              members: response.data,
              responseStatus: response.status,
              loading: false
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
    const { query, absences, members, responseStatus, loading } = this.state

    if (!(responseStatus === 200 || responseStatus === 304)) {
      return (
        <div
          className='flex justify-center p-5'
        >
          <ErrorNotification />
        </div>
      )
    }

    if (loading) {
      return (
        <div
          className='flex justify-center p-5'
        >
          <LoadingNotification />
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
            query={query}
          />
        </div>
      </div>
    )
  }
}
