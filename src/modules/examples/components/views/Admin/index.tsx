import { AdminViewWrapper } from './styles'
import HomeIcon from '@mui/icons-material/Home'

const AdminView = () => {
  return (
    <AdminViewWrapper>
      <div className='icon-container'>
        <HomeIcon className='home-icon' />
      </div>
    </AdminViewWrapper>
  )
}

export default AdminView
