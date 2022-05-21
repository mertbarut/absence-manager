import http from '../http-common'
import IAbsenceData from '../types/absence.type'

class AbsenceDataService {
  getAll() {
    return http.get<Array<IAbsenceData>>('/absences')
  }
  get(id: number) {
    return http.get<IAbsenceData>(`/absences/${id}`)
  }
  findByType(type: string) {
    return http.get<Array<IAbsenceData>>(`/absences?type=${type}`)
  }
}

export default new AbsenceDataService()