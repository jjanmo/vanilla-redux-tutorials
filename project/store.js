const INITIAL_DATA = [
  {
    id: 1,
    checked: false,
    selected: true,
    title: "Redux 어떻게 써야 잘 썼다고 소문이 날까?",
    description: "리덕스를 잘 사용하는 방법에 대해서 설명한다.",
  },
  {
    id: 2,
    checked: false,
    selected: false,
    title: "React.memo, useCallback 사용으로 렌더링 최적화 하기(feat.React-Native,Redux)",
    description: "React.memo, useCallback에 대한 설명 및 성능 평가",
  },
];

let ID = INITIAL_DATA.length;

const reducer = (state, action) => {
  if (state === undefined) {
    return {
      mode: "Detail",
      list: [...INITIAL_DATA],
    };
  }
  switch (action.type) {
    case "SELECT": {
      return {
        mode: "Detail",
        list: state.list.map((item) => {
          if (action.id === item.id) {
            return {
              ...item,
              selected: true,
            };
          }
          return {
            ...item,
            selected: false,
          };
        }),
      };
    }
    case "ADD": {
      return {
        list: [
          ...state.list,
          {
            id: (ID = ID + 1),
            checked: false,
            selected: false,
            title: action.title,
            description: action.description,
          },
        ],
      };
    }
    case "DELETE": {
      return {
        list: state.list.filter((item) => action.id !== item.id),
      };
    }
    case "UPDATE": {
      return {
        list: state.list.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              title: action.title,
              description: action.description,
            };
          }
          return item;
        }),
      };
    }
  }
};

const store = Redux.createStore(reducer);
store.subscribe(Detail);
store.subscribe(List);
