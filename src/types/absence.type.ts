export default interface Absence {
  admitterId?: number | null,
  admitterNote: string,
  confirmedAt: string,
  createdAt: string,
  crewId: number,
  endDate: string,
  id: number,
  memberNote: string,
  rejectedAt: string | null,
  startDate: string,
  type: string,
  userId: number
}