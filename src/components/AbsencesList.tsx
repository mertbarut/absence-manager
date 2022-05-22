import { Component, ChangeEvent } from 'react'
import AbsenceDataService from '../services/absences'
import MemberDataService from '../services/members'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import Absences from './Absences'
import AbsenceHeader from './AbsencesHeader'
import LoadingNotification from './LoadingNotification'
import ErrorNotification from './ErrorNotification'

type Props = Record<string, unknown>

type State = {
  absences: Array<IAbsenceData>,
  members: Array<IMemberData>,
  currentAbsence: IAbsenceData | null,
  currentIndex: number,
  queryType: string,
  queryStartDate: Date,
  queryEndDate: Date,
  responseStatus: number,
  loading: boolean
}

export default class AbsencesList extends Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.onChangeQueryType = this.onChangeQueryType.bind(this)
    this.onChangeQueryStartDate = this.onChangeQueryStartDate.bind(this)
    this.onChangeQueryEndDate = this.onChangeQueryEndDate.bind(this)
    this.retrieveData = this.retrieveData.bind(this)

    this.state = {
      absences: [],
      members: [],
      currentAbsence: null,
      currentIndex: -1,
      queryType: '',
      queryStartDate: new Date(),
      queryEndDate: new Date(),
      responseStatus: 0,
      loading: true
    }
  }
  componentDidMount() {
    this.retrieveData()
  }
  onChangeQueryType(e: ChangeEvent<HTMLInputElement>) {
    const searchQueryType = e.target.value
    this.setState({
      queryType: searchQueryType
    })
  }
  onChangeQueryStartDate(e: ChangeEvent<HTMLInputElement>) {
    const searchQueryType = e.target.value
    this.setState({
      queryStartDate: new Date(searchQueryType)
    })
  }
  onChangeQueryEndDate(e: ChangeEvent<HTMLInputElement>) {
    const searchQueryType = e.target.value
    this.setState({
      queryEndDate: new Date(searchQueryType)
    })
  }
  retrieveData() {
    AbsenceDataService.getAll()
      .then((response) => {
        this.setState({
          absences: response.data,
          responseStatus: response.status,
          queryStartDate: new Date(response.data
            .map((absence) => absence.startDate)
            .sort((date1, date2) => (
              new Date(date1).getTime() - new Date(date2).getTime())
            )[0]) // take starting dates out of absences array, sort it and return the first one
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

  render() {
    const {
      queryType,
      queryStartDate,
      queryEndDate,
      absences,
      members,
      responseStatus,
      loading
    } = this.state

    if (loading) {
      return (
        <div
          className='flex justify-center p-5'
        >
          <LoadingNotification />
        </div>
      )
    }

    if (!(responseStatus === 200 || responseStatus === 304)) {
      return (
        <div
          className='flex justify-center p-5'
        >
          <ErrorNotification />
        </div>
      )
    }

    return (
      <div>
        <div
          className='flex justify-center'
        >
        </div>
        <div>
          <AbsenceHeader
            queryType={queryType}
            queryStartDate={queryStartDate}
            queryEndDate={queryEndDate}
            onChangeQueryType={this.onChangeQueryType}
            onChangeQueryStartDate={(date: Date) => this.setState({ queryStartDate: date })}
            onChangeQueryEndDate={(date: Date) => this.setState({ queryEndDate: date })}
          />
          <Absences
            absences={absences}
            members={members}
            queryType={queryType}
            queryStartDate={queryStartDate}
            queryEndDate={queryEndDate}
          />
        </div>
      </div>
    )
  }
}
