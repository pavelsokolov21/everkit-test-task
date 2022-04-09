import { FC } from 'react'
import { MainLayout } from '../../layouts/main'
import { Header } from './header'
import { Tokens } from './tokens'

export const Home: FC = () => (
  <MainLayout>
    <Header />
    <Tokens />
  </MainLayout>
)
