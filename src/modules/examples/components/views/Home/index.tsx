import useEnv from '@/core/hooks/useEnv'
import useWords from '@/modules/core/hooks/useWords'
import { HomeContainer } from './styles'
import LangSelector from '../../shared/LangSelector'
import ThemeSwitch from '../../shared/ThemeSwitch'
import Image from 'next/image'

const HomeView = () => {
  const { getKey } = useEnv()
  const {
    HOME: { WELCOME },
  } = useWords()

  return (
    <HomeContainer>
      <div className='header-container'>
        <div className='title-container'>
          <h1 className='title'>
            <span className='mr-1'>{WELCOME}</span>
            <b style={{ color: 'blue' }}>{getKey('APP_NAME')}</b>
          </h1>
        </div>

        <div className='options-container'>
          <ThemeSwitch />
          <LangSelector />
        </div>
      </div>
      <div>
        <Image
          src='/static/cover.png'
          width={200}
          height={100}
          alt='ok'
        />
      </div>
    </HomeContainer>
  )
}

export default HomeView
