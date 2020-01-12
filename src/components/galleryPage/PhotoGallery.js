import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import { Container, Grid } from '@material-ui/core'
import CustomizedDialogs from '../common/CustomDialog'
import EnlargeIcon from '../../resource/EnlargeIcon'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginBottom: 45,
  },
  gridList: {
    width: '100%',
    height: 'auto',
    // [theme.breakpoints.down('sm')]: {
    //   width: '100%',
    // },
    // [theme.breakpoints.down('md')]: {
    //   width: '100%',
    // },
    // [theme.breakpoints.up('md')]: {
    //   width: 1280,
    // },
  },
  gridItem: {
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.02)',
      webkitTransition: ' all 0.5s ease',
      mozTransition: ' all 0.5s ease',
      oTransition: ' all 0.5s ease',
      msTransition: ' all 0.5s ease',
      transition: 'all 0.5s ease',
    },
  },
  title: {
    '&:hover': {
      color: '#FFD300',
      fontWeight: 'bold',
    },
  },
  icon: {
    color: theme.palette.grey[500],
    '&:hover': {
      color: '#FFD300',
    },
  },
}))

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *  *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function ImageGridList(props) {
  const classes = useStyles()
  const smDown = useMediaQuery(theme => theme.breakpoints.down('xs'))
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const mdUp = useMediaQuery(theme => theme.breakpoints.down('md'))

  const [state, setState] = React.useState({
    description: '',
    img: undefined,
    open: false,
  })
  console.log(smDown)
  console.log(mdDown)
  console.log(mdUp)

  const handleClickOpen = (img, title) => {
    setState({ description: title, img, open: true })
  }
  const handleClose = () => {
    setState({ ...state, open: false })
  }

  const tileData = [
    {
      img: 'gallery/livingroom.jpg',
      title: 'Automation',
      cols: smDown ? 1 : mdDown ? 4 : 2,
    },
    {
      img: 'gallery/stairwayToHeaven.jpg',
      title: 'Security',
      cols: smDown ? 1 : mdDown ? 4 : 4,
    },
    {
      img: 'gallery/wardrobe.jpg',
      title: 'Electrical',
      cols: smDown ? 1 : mdDown ? 4 : 2,
    },
    {
      img: 'gallery/home.jpg',
      title: 'Camera',
      cols: smDown ? 1 : mdDown ? 4 : 3,
    },
    {
      img: 'cinema.jpg',
      title: 'Home Theatre',
      cols: smDown ? 1 : mdDown ? 4 : 2,
    },
    {
      img: 'lighting.jpg',
      title: 'Image',
      cols: smDown ? 1 : mdDown ? 4 : 3,
    },
    {
      img: '/gallery/theatre-gallery.jpg',
      title: 'Home Theatre',
      cols: smDown ? 1 : mdDown ? 4 : 4,
    },
    {
      img: 'lighting.jpg',
      title: 'Lighting',
      cols: smDown ? 1 : mdDown ? 4 : 4,
    },
  ]

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <GridList
          cellHeight={260}
          className={classes.gridList}
          cols={smDown ? 1 : mdDown ? 8 : 8}
        >
          {tileData.map((tile, index) => (
            <GridListTile
              key={`tile-gallery-${index}`}
              cols={tile.cols || 1}
              title={tile.title}
              onClick={() => handleClickOpen(tile.img, tile.title)}
              className={classes.gridItem}
              classes={{ tile: { overflowY: 'scroll !important' } }}
            >
              <img src={tile.img} alt={tile.title} style={{ width: '100%', height: '100%' }} />
              <GridListTileBar
                title={tile.title}
                classes={{ title: classes.title, root: classes.title }}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <EnlargeIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        <CustomizedDialogs
          content={'gallery item'}
          handleClose={handleClose}
          open={state.open}
          img={state.img}
          title={'Gallery'}
          description={state.description}
        />
      </Container>
    </div>
  )
}
