// get /api/user
import data from '@/database/user'
export default defineEventHandler(() => {
  return data
})
