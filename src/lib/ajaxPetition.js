export default class AjaxPetition {
  port;

  contructor(myPort) {
    this.port = myPort
  }

  getContacts() {
    fetch(`http://localhost:${this.port}/api`)
      .then(res => {
        if(!res.ok) throw Error(res.status)

        return res.json()
      })
      .then(json => json)
      .catch((err) => {return {error: err, status: true, message: "Ocurrio un error al solicitar los datos."}})
  }

  deleteContact(id) {
    const objetcFetch = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }

    fetch(`http://localhost:30${this.port}/api/${id}`, objetcFetch)
      .then(res => res.json())
      .then(json => this.getContacts())
      .catch((err) => {return {error: err, status: true, message: "Ocurrio un error al solicitar los datos."}})
  }
}
