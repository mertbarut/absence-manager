import { Component, ChangeEvent } from "react";
import AbsenceDataService from "../services/absences";
import IAbsenceData from '../types/absence.type';
import Absences from './Absences';

type Props = Record<string, unknown>;

type State = {
  absences: Array<IAbsenceData>,
  currentAbsence: IAbsenceData | null,
  currentIndex: number,
  searchQuery: string
};

export default class AbsencesList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchQuery = this.onChangeSearchQuery.bind(this);
    this.retrieveAbsences = this.retrieveAbsences.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveAbsence = this.setActiveAbsence.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
    this.state = {
      absences: [],
      currentAbsence: null,
      currentIndex: -1,
      searchQuery: ""
    };
  }
  componentDidMount() {
    this.retrieveAbsences();
  }
  onChangeSearchQuery(e: ChangeEvent<HTMLInputElement>) {
    const searchQuery = e.target.value;
    this.setState({
      searchQuery: searchQuery
    });
  }
  retrieveAbsences() {
    AbsenceDataService.getAll()
      .then((response: any) => {
        this.setState({
          absences: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveAbsences();
    this.setState({
      currentAbsence: null,
      currentIndex: -1
    });
  }
  setActiveAbsence(absence: IAbsenceData, index: number) {
    this.setState({
      currentAbsence: absence,
      currentIndex: index
    });
  }
  searchQuery() {
    this.setState({
      currentAbsence: null,
      currentIndex: -1
    });
    AbsenceDataService.findByType(this.state.searchQuery)
      .then((response: any) => {
        this.setState({
          absences: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { searchQuery, absences, currentAbsence, currentIndex } = this.state;

    return (
      <div className="grid grid-cols-1 grid-rows-16 gap-4">
        <div className="col-span-2">
          <div className="input-group relative flex my-4 mx-12 md:mx-24 lg:mx-48 xl:mx-96">
            <input type="search" placeholder="Filter by type or date" value={searchQuery} onChange={this.onChangeSearchQuery} className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Search" aria-describedby="button-addon2"></input>
            <button onClick={this.searchQuery} className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="row-span-15">
          <Absences absences={absences} />
        </div>
      </div>
    );
  }
}
