import { ADD_COMMENT, UPLOAD_IMAGE } from "../types";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  images: [],
};

const imageReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        images: [
          ...state.images,
          {
            id: uuidv4(),
            url: action.payload,
            comments: [],
          },
        ],
      };

    case ADD_COMMENT:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
