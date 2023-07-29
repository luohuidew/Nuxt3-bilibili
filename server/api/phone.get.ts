// get /api/phone
import phoneNum from '@/database/phone'
export default defineEventHandler(() => {
  return phoneNum
})
