import { createSlice } from '@reduxjs/toolkit'

const InspectionOnlineSlice = createSlice({
  name: 'inspectionOnline',
  initialState: {
    que1: { que1: 'नाही', remarksQue1: '' },
    que1a: { que1a: 'नाही', remarksQue1a: '' },
    que1b: { que1b: 'नाही', remarksQue1b: '' },
    que1c: { que1c: 'नाही', remarksQue1c: '' },
    que1d: { que1d: 'नाही', remarksQue1d: '' },
    que1e: { que1e: 'नाही', remarksQue1e: '' },
    que7: { que7: 'नाही', remarksQue7: '' },
    que8: { que8: 'नाही', remarksQue8: '' },
    que9: { que9: 'नाही', remarksQue9: '' },
    que10: { que10: 'नाही', remarksQue10: '' },
    que11: { que11: 'नाही', remarksQue11: '' },
    que11a: { que11a: 'नाही', remarksQue11a: '' },
    que11b: { que11b: 'नाही', remarksQue11b: '' },
    que11c: { que11c: 'नाही', remarksQue11c: '' },
    que11d: { que11d: 'नाही', remarksQue11d: '' },
    // que16: [
    //   { que16_1: 'नाही', remarksQue16_1: '' },
    //   { que16_2: 'नाही', remarksQue16_2: '' },
    // ],
    que16_1: { que16_1: 'नाही', remarksQue16_1: '' },
    que16_2: { que16_2: 'नाही', remarksQue16_2: '' },
    que16a: { que16a: 'नाही', remarksQue16a: '' },
    que16b: { que16b: 'नाही', remarksQue16b: '' },
    que19a: { que19a: 'नाही', remarksQue19a: '' },
    que19b: { que19b: 'नाही', remarksQue19b: '' },
    que19c: { que19c: 'नाही', remarksQue19c: '' },
    que19d: { que19d: 'नाही', remarksQue19d: '' },
    que24: { que24: 'नाही', remarksQue24: '' },
    que25: { que25: 'नाही', remarksQue25: '' },
    que26: { que26: 'नाही', remarksQue26: '' },
    que27: { que27: 'नाही', remarksQue27: '' },
  },
  reducers: {
    addInspectionDetailsOnline: (state, { payload }) => {
      return { ...payload }
    },
  },
})
export const { addInspectionDetailsOnline } = InspectionOnlineSlice?.actions

export const selectState = (state) => state?.inspectionOnline

export default InspectionOnlineSlice.reducer
