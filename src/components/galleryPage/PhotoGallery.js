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
import Link from '../common/Link'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginBottom: 45,
    overflowY: 'hidden',
  },
  gridList: {
    width: '100%',
    height: 'auto',
    overflowY: 'hidden',

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
      transform: 'scale(1.015)',
      webkitTransition: ' all 0.5s ease',
      mozTransition: ' all 0.5s ease',
      oTransition: ' all 0.5s ease',
      msTransition: ' all 0.5s ease',
      transition: 'all 0.5s ease',
    },
    overflowY: 'hidden',
  },
  title: {
    '&:hover': {
      color: '#FBC02D',
    },
  },
  icon: {
    color: theme.palette.grey[500],
    '&:hover': {
      color: '#FBC02D',
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

  const handleClickOpen = (img, title) => {
    setState({ description: title, img, open: true })
  }
  const handleClose = () => {
    setState({ ...state, open: false })
  }

  const tileData = [
    {
      img: '3dproject.png',
      title: '3DProject',
      cols: smDown ? 1 : mdDown ? 6 : 4,
    },
    {
      img: 'gallery/livingroom.jpg',
      title: 'Lighting Automation',
      cols: smDown ? 1 : mdDown ? 6 : 4,
    },
    {
      img: 'gallery/stairwayToHeaven.jpg',
      title: 'Lighting Automation',
      cols: smDown ? 1 : mdDown ? 6 : 4,
    }, // ------------------------------

    {
      img: 'gallerytwo/homesecurity3.jpeg',
      title: 'Security System',
      cols: smDown ? 1 : mdDown ? 6 : 3,
    },
    {
      img: 'gallery/home.jpg',
      title: 'Lighting Automation',
      cols: smDown ? 1 : mdDown ? 6 : 3,
    },
    {
      img: 'gallerytwo/camera.jpeg',
      title: 'Security Camera',
      cols: smDown ? 1 : mdDown ? 6 : 3,
    },
    {
      img: 'gallerytwo/camera2.jpeg',
      title: 'Security Camera 2',
      cols: smDown ? 1 : mdDown ? 6 : 3,
    }, // ------------------------------
    {
      img: '/gallery/theatre-gallery.jpg',
      title: 'Home Theatre',
      cols: smDown ? 1 : mdDown ? 6 : 4,
    },
    {
      img: 'gallerytwo/climate-control.jpeg',
      title: 'Climate Control',
      cols: smDown ? 1 : mdDown ? 6 : 4,
    },
    {
      img: 'gallery/wardrobe.jpg',
      title: 'Electrical',
      cols: smDown ? 1 : mdDown ? 6 : 4,
    }, // ------------------------------
    {
      img: 'gallerytwo/sound.jpeg',
      title: 'Sound System',
      cols: smDown ? 1 : mdDown ? 6 : 3,
    },
    {
      img: 'gallerytwo/security.jpeg',
      title: 'Security System',
      cols: smDown ? 1 : mdDown ? 6 : 3,
    },
    {
      img: 'gallerytwo/lightautomation2.jpeg',
      title: 'Lighting Controls',
      cols: smDown ? 1 : mdDown ? 6 : 3,
    },
    {
      img: '/gallerytwo/smarthome2.jpeg',
      title: 'Smart Home',
      cols: smDown ? 1 : mdDown ? 6 : 3,
    },
    // ------------------------------
    {
      img: '/gallerytwo/lighting.jpeg',
      title: 'Lighting Automation',
      cols: smDown ? 1 : mdDown ? 6 : 4,
    },
    {
      img: 'gallerytwo/lighting3.jpeg',
      title: 'Lighting Automation',
      cols: smDown ? 1 : mdDown ? 6 : 4,
    },
    {
      img: 'gallery/lighting-gallery.jpg',
      title: 'Lighting Automation',
      cols: smDown ? 1 : mdDown ? 6 : 4,
    },
  ]

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <GridList
            cellHeight={260}
            className={classes.gridList}
            cols={smDown ? 1 : mdDown ? 12 : 12}
          >
            {tileData.map((tile, index) => (
              <GridListTile
                key={`tile-gallery-${index}`}
                cols={tile.cols || 1}
                title={tile.title}
                onClick={() =>
                  tile.title === '3DProject'
                    ? "location.href='pageurl.html';"
                    : handleClickOpen(tile.img, tile.title)
                }
                className={classes.gridItem}
              >
                {tile.title === '3DProject' ? (
                  <a href="https://my.matterport.com/show/?m=EJ33Bp9SU3j" target="_blank">
                    <img
                      src={tile.img}
                      alt={tile.title}
                      style={{ width: '100%', height: '100%' }}
                    />
                    <GridListTileBar
                      title={tile.title}
                      classes={{ title: classes.title, root: classes.title }}
                      style={{ height: '100%', textAlign: 'center', fontWeight: 'bolder' }}
                      // actionIcon={
                      //   // <IconButton
                      //   //   aria-label={`info about ${tile.title}`}
                      //   //   className={classes.icon}
                      //   // >
                      //   //   <EnlargeIcon />
                      //   // </IconButton>
                      // }
                    />
                  </a>
                ) : (
                  <React.Fragment>
                    <img
                      src={tile.img}
                      alt={tile.title}
                      style={{ width: '100%', height: '100%' }}
                    />
                    <GridListTileBar
                      title={tile.title}
                      classes={{ title: classes.title, root: classes.title }}
                      style={{ height: '100%', textAlign: 'center', fontWeight: 'bolder' }}
                      // actionIcon={
                      //   // <IconButton
                      //   //   aria-label={`info about ${tile.title}`}
                      //   //   className={classes.icon}
                      //   // >
                      //   //   <EnlargeIcon />
                      //   // </IconButton>
                      // }
                    />
                  </React.Fragment>
                )}
              </GridListTile>
            ))}
          </GridList>
        </Container>
      </div>
      <CustomizedDialogs
        content={'gallery item'}
        handleClose={handleClose}
        open={state.open}
        img={state.img}
        title={'Gallery'}
        description={state.description}
      />
    </React.Fragment>
  )
}
