# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


----------------------

Redux основные понятия: reducer-ы, action-ы, action creator-ы and store:

+ reducer – это чистая функция, которая принимает в качестве аргументов предыдущее состояние и action и возвращает новое состояние. 
+ action – это объект, задающий тип.

const myReducer = (previousState, action) => {
    // use the action type and payload to create a new state based on the previous state.
    return newState;
}

+ Большинство изменений в приложении, использующем Redux, начинаются с события, которое прямо или косвенно запускается пользователем. Действия часто отправляются с помощью action creator-а.
+ action creator – это функция, которая возвращает объект action. Объект action, возвращаемый action creator-ом, отправляется всем различным reducer-ам в приложении.
+ В зависимости от action-а reducer-ы могут выбрать возврат новой версии своего фрагмента состояния. Затем возвращенная часть состояния передается по конвейеру в состояние приложения, которое затем возвращается в приложение React, а затем – вызывает повторный рендеринг всех его компонентов.

+ Допустим, пользователь нажимает кнопку, после чего мы вызываем action creator, который представляет собой функцию, возвращающую объект action. Этот объект содержит аргумент type, описывающий тип только что запущенного действия.

+ Что такое store?
+ В Redux store – это объект, объединяющий action-ы (которые представляют то, что произошло) и reducer-ы (которые обновляют состояние в соответствии с этими action-ами). 
+ У store есть несколько обязанностей:
    - Разрешать доступ к состоянию через getState().
    - Разрешать обновление состояния через dispatch(action).
    - Хранить состояние приложения.
    - Регистрировать слушателей с помощью subscribe(listener).
    - Отменять регистрацию слушателей с помощью функции, возвращаемой subscribe(listener).
