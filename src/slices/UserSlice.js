import { createSlice } from '@reduxjs/toolkit'

const UserDetailsSlice = createSlice({
  name: 'user',
  initialState: {
    grTitle: '',
    grInfoRemark: '',
    grDate: '',
    department: '',
    district: 'raigad',
    taluka: '',
    village: '',
    image: '',
  },
  reducers: {
    addUserDetails: (state, { payload }) => {
      return { ...payload }
    },
  },
})
export const { addUserDetails } = UserDetailsSlice?.actions

export const selectState = (state) => state?.user

export default UserDetailsSlice.reducer
