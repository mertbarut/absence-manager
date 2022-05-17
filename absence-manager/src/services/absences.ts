import axios from 'axios'

type Absence = {
  admitterId: number,
  admitterNote: string,
  confirmedAt: string,
  createdAt: string,
  crewId: number,
  endDate: string,
  id: number,
  memberNote: string,
  rejectedAt: string,
  startDate: string,
  type: string,
  userId: number
}

type GetAllAbsencesResponse = {
  data: Absence[];
}

const absencesUrl: string = 'http://localhost:3001/absences'

const getAllAbsences = async () => {
  try {
    const { data, status } = await axios.get<GetAllAbsencesResponse>(
      absencesUrl,
      {
        headers: {
          Accept: 'application/json'
        }
      },
    );

    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export default { getAllAbsences }