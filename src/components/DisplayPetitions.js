import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './stylesheets/DisplayPetitions.css'

class DisplayPetitions extends Component {

  state = {
    petitions: [],
    randomPetitionLabel: [],
    randomPetitionId: []
  }

  componentDidMount() {
    fetch('http://lda.data.parliament.uk/epetitions.json?_view=ePetitionsListViewer&status=open&_sort=-numberOfSignatures&_pageSize=500&_page=0')
      .then(results => { return results.json()})
      .then(data => {
        let petitions = data.result.items
        this.setState({petitions: petitions})
        this.randomizePetition()
      })
  }

  randomizePetition = () => {
    let randomPetition = this.state.petitions[Math.floor(Math.random() * this.state.petitions.length)]
    this.setState({randomPetitionLabel: randomPetition.label})
    this.setState({randomPetitionId: randomPetition.identifier})
  }

  moreInformationLink = () => {
    let url = `https://petition.parliament.uk/petitions/${this.state.randomPetitionId._value}`
    window.open(url, '_blank')
  }

  render() {
    const randomizeButton =
      <Button variant="primary" onClick={() => this.randomizePetition()}>NEW PETITION</Button>

    const moreInfoButton =
      <Button variant="info" onClick={() => this.moreInformationLink()}>MORE INFORMATION</Button>

    return (
      <div className="DisplayPetitions">
        <div id="main-label">
        {(this.state.randomPetitionLabel._value)}
        </div>
        <br />
        <div id="buttons">
          {moreInfoButton}
          &nbsp;
          {randomizeButton}
        </div>
      </div>
    )
  }
}

export default DisplayPetitions
