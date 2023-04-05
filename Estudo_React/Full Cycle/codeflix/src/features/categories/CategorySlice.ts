import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Category {
  id: string;
  name: string;
  is_activate: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  description: null | string;
}

const category: Category = {
  id: '0cce68ddd-8956-4dd2-a1056479b01',
  name: 'Miguel',
  is_activate: true,
  created_at: '2023-08-15T10:58:08+0000',
  updated_at: '2023-08-15T10:58:08+0000',
  deleted_at: null,
  description: 'Earum quo dolor tempore nisi'
}

// const categories = [
//   category,
//   {...category, id: '1cce68ddd-8956-4dd2', name: "Peach"},
//   {...category, id: '2cce68ddd-8956-4dd2', name: "Apple"},
//   {...category, id: '3cce68ddd-8956-4dd2', name: "Banana"},
// ]

export const initalState = [
  category,
  {...category, id: '1cce68ddd-8956-4dd2', name: "Peach"},
  {...category, id: '2cce68ddd-8956-4dd2', name: "Apple"},
  {...category, id: '3cce68ddd-8956-4dd2', name: "Banana"},
]

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initalState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  },
})

//Selector
export const selectCategories = (state: RootState) =>  state.categories                                                             

// Select category by id
export const selectCategoryById = (state: RootState, id: string) => {
  const category = state.categories.find((category) => category.id === id)
  return (
    category || {
      id: '',
      name: '',
      description: '',
      is_activate: false,
      deleted_at: null,
      created_at: '',
      updated_at: '',
    }
  )
}
 

export default categoriesSlice.reducer
// export const { createPost, updatePost, deletePost } = categoriesSlice.actions;