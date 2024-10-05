import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Link from 'next/link'
import classnames from 'classnames'
import { get as getProp } from 'object-path'
import { useRouter } from 'next/router'
import { MenuItem } from './styles'
import { langs } from './list'
import useWords from '@/modules/core/hooks/useWords'
import { GeneralContext } from '@/modules/core/store/context/GeneralContext'

interface Props {
  className?: string
}

const LangSelector: React.FC<Props> = ({ className }) => {
  const {
    LANG_SELECTOR: { TITLE, LANGS },
  } = useWords()

  const { lang, setLang } = React.useContext(GeneralContext)

  const { pathname } = useRouter()

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string)
  }

  return (
    <Box className={classnames(className)} sx={{ minWidth: 120 }}>
      <FormControl size="small" fullWidth>
        <InputLabel id="demo-simple-select-label">{TITLE}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label={TITLE}
          onChange={handleChange}
          MenuProps={{ disableScrollLock: true }}
        >
          {langs.map((item, index) => (
            <MenuItem value={item.code} key={index}>
              <Link href={pathname} className="menuLink" locale={item.code}>
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${item.country}.png 2x`}
                  src={`https://flagcdn.com/w20/${item.country}.png`}
                  alt=""
                />
                <span className="ml-1" style={{ color: '#333333' }}>
                  {getProp(LANGS, item.code)}
                </span>
              </Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default LangSelector
