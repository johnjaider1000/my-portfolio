import { ButtonOpenFilter, ToolsHeaderWrapper } from './styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ButtonBase, InputAdornment, TextField } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import SearchIcon from '@mui/icons-material/Search'

const ToolsHeader = () => {
  const inputRef = useRef<any>()
  const [showFilter, setShowFilter] = useState<boolean>(false)

  const toggleTool = () => {
    setShowFilter((prevStatus) => !prevStatus)
  }

  useEffect(() => {
    if (showFilter) {
      inputRef.current.querySelector('input').focus()
    }
  }, [showFilter])

  return (
    <ToolsHeaderWrapper>
      <div
        className={classNames('filter-card', {
          visible: showFilter,
          hidden: !showFilter,
        })}
      >
        <div className='filter-container'>
          <TextField
            ref={inputRef}
            variant='outlined'
            size='small'
            placeholder='Filter menu'
            className='filter-input'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start' className='adornment'>
                  <SearchIcon className='icon' />
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <ButtonBase className={'btn-hide-filter'} onClick={toggleTool}>
            <ExpandLessIcon />
          </ButtonBase>
        </div>
      </div>

      <div
        className={classNames('info-card', {
          visible: !showFilter,
          hidden: showFilter,
        })}
      >
        <ButtonOpenFilter onClick={toggleTool}>
          <KeyboardArrowDownIcon className='icon' />
        </ButtonOpenFilter>

        <Image
          src='/img/cover.png'
          className='cover-image'
          alt='Cover Image'
          width={200}
          height={200}
        />

        <div className='img-bg' />

        <div className='container'>
          <Image
            src='/img/avatar.jpg'
            className='img-user'
            alt='Avatar Image'
            width={200}
            height={200}
          />

          <div className='header-content'>
            <span className='small-label'>Bienvenido</span>
            <label className='label-user'>Dr. Codex Lantern</label>
            <span className='label-description'>Nombre de sucursal</span>
          </div>
        </div>
      </div>
    </ToolsHeaderWrapper>
  )
}

export default ToolsHeader
