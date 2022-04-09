import { FC } from 'react'
import { BarProvider } from '../../components/bar/provider'
import { MainLayout } from '../../layouts/main'
import { categories } from '../../tokens'
import { Header } from './header'
import { Tokens } from './tokens'

export const Home: FC = () => (
  <BarProvider initialValue={categories[0].id}>
    <MainLayout>
      <Header />
      <Tokens />
    </MainLayout>
  </BarProvider>
)
