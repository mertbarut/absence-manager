import http from '../http-common'
import IMemberData from '../types/member.type'

class MemberDataService {
  getAll() {
    return http.get<Array<IMemberData>>('/members')
  }
  get(id: number) {
    return http.get<IMemberData>(`/members/${id}`)
  }
  findByUserId(UserId: number) {
    return http.get<Array<IMemberData>>(`/members?UserId=${UserId}`)
  }
}

export default new MemberDataService()