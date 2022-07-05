## Info

Test Assignment for Internship at JetBrains

## Backend

Follow this [link](https://github.com/dshtefan/fls-stats-backend) to view the backend code 

## Project requirements


Необходимо сверстать и сделать функциональной страницу со статистикой использования лицензий трёх различных продуктов JetBrains + простой backend для получения данных для отображения на странице.

Диапазоны данных: квартал, месяц, неделя, день.

Требования к странице:

При переключении диапазонов или переходе вперед-назад в рамках одного диапазона должны переключаться данные в таблице и графики. На графиках при наведении на соответствующий столбец должна отображаться подсказка с конкретным значением и периодом.

Скетч показывает примерное расположение блоков, при реализации вы можете использовать любую готовую библиотеку визуальных компонентов или же написать свои собственные.

![](https://i.gyazo.com/9cd54dcd4cbf7cc5827c71dd35143d93.png)

Рабочее разрешение – 1024px, но страница должна адекватно отображаться при меньших (вплоть до 320px) и больших разрешениях (без ограничения).

Единственное обязательное требование к заданию: использование библиотеки React.

Рекомендуется использовать (это означает, что вы можете использовать одно из предложенных решений/библиотек,
а можете не использовать или использовать что-то другое, если оно по вашему мнению лучше подходит):
Create React App, React Hooks API, react-use, recharts, lodash, dayjs, axios.

Здорово, если вы используете для реализации TypeScript, но JavaScript тоже подойдёт. Использование Redux также будет плюсом.

При реализации вы можете предложить любые улучшения/изменения как функционала так и UI/UX, но важно чтобы изначальное задание было сделано полностью. Также будьте готовы прокомментировать своё решение.

#### Backend:

Можете использовать любой язык/фреймворк, единственным условием является наличие инструкции по запуску вашего приложения.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
