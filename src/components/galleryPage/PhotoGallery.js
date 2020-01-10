import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import { Container } from '@material-ui/core'

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
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
  {
    img: 'gallery/livingroom.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: 'gallery/stairwayToHeaven.jpg',
    title: 'Image',
    author: 'author',
    cols: 3,
  },
  {
    img: 'gallery/wardrobe.jpg',
    title: 'Image',
    author: 'author',
    cols: 3,
  },
  // row
  {
    img: 'gallery/home.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: 'cinema.jpg',
    title: 'Image',
    author: 'author',
    cols: 4,
  },
  {
    img: 'lighting.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  // row
  {
    img: '/gallery/theatre-gallery.jpg',
    title: 'Image',
    author: 'author',
    cols: 4,
  },
  {
    img: 'lighting.jpg',
    title: 'Image',
    author: 'author',
    cols: 4,
  },
]
export default function ImageGridList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <GridList cellHeight={260} className={classes.gridList} cols={8}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1} title={tile.title}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </div>
  )
}
