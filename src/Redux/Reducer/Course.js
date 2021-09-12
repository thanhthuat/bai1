import {TypeActions} from '../Types'
const initialState ={
    ListCourse:[],
    CourseDetail:null,
}
   
export const Course=(state=initialState,action)=>{
    switch (action.type) {
        case TypeActions.GET_DATA:
            state.ListCourse =action.payload
            return {...state}
        case TypeActions.SET_COURSE_DETAIL:
            state.CourseDetail =action.payload
            return {...state} 
        default:
            //so sanh shawdow
           return {...state}
    }

}