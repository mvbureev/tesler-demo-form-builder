import React from 'react'
import './imports/rxjs'
import { render } from 'react-dom'
import { Provider } from '@tesler-ui/core'
import { ConfigProvider } from 'antd'
import enUs from 'antd/es/locale-provider/en_US'
import { reducers } from './reducers'
import { epics } from './epics'
import './index.css'
import AppLayout from './components/AppLayout/AppLayout'
import FormBuilder from './components/widgets/FormBuilder/FormBuilder'
import { axiosInstance } from './api/session'

const App = <FormBuilder />

render(App, document.getElementById('root'))
