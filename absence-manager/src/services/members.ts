import axios from 'axios'

type Member = {
  crewID: number,
  id: number,
  image: string,
  name: string,
  userId: number
}

type GetAllMembersResponse = {
  data: Member[];
}

const membersUrl: string = 'http://localhost:3001/members'

const getAllMembers = async () => {
  try {
    const { data, status } = await axios.get<GetAllMembersResponse>(
      membersUrl,
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

export default { getAllMembers }