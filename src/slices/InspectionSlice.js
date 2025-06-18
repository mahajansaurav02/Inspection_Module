import { createSlice } from '@reduxjs/toolkit'

const InspectionSlice = createSlice({
  name: 'inspection',
  initialState: {
    que1a: 'नाही',
    que1a1: 'नाही',
    que2: 'नाही',
    que3a: 'नाही',
    que3a1: 'नाही',
    que4a: 'नाही',
    que4a1: 'नाही',
    que4a2: 'नाही',
    que5: {
      nondKramank: '',
      kajapa: '',
      akarfodPatrak: '',
      kabulayat: '',
      gaonNo7_12: '',
      gaonNo1C: '',
      gaonNo2: '',
      gaonNo3: '',
    },
    que6: 'नाही',
    que7: { que7: 'नाही', goshwaraShetraQue7: '', aakarQue7: '' },
    que8a: 'नाही',
    que8a1: 'नाही',
    que8b: 'नाही',
    que8c: 'नाही',
    que8c1: 'नाही',
    que9a: { que9a: 'होय', remarksQue9a: '' },
    que9b: { que9b: 'होय', remarksQue9b: '' },
    que9c: { que9c: 'होय', remarksQue9c: '' },
    que9d: { que9d: 'होय', remarksQue9d: '' },
    que9e: { que9e: 'होय', remarksQue9e: '' },
  },
  reducers: {
    addInspectionDetails: (state, { payload }) => {
      return { ...payload }
    },
  },
})
export const { addInspectionDetails } = InspectionSlice?.actions

export const selectState = (state) => state?.inspection

export default InspectionSlice.reducer
