import React from "react";

class MyForm extends React.Component {

   state = {
     person : { name: '', comments: '', animal: ''}
   }
      // forms have a default submit, that includes refreshing the page
      // its best to have a submit function to handle submission of forms
      // preventdefault will prevent the page from refreshing 
   onSubmit = (e) => {
      e.preventDefault()
    this.setState({ value: '' })
   }

   onChange = (e) => {
      e.preventDefault();
      const value = e.target.value
      const name = e.target.name
      console.log(name);
      console.log(value);
      this.setState((prevState) => ({ person: {...prevState.person, [name]: value}}))
   }

   render() {
      console.log(this.state.person);
      return (
         <form onSubmit={this.onSubmit}>
            <label>
               Name:
               <input autoComplete="off" onChange={this.onChange} type="text" name="name" value={this.state.value}/>
            </label>
            <br />
            <label htmlFor="">Comments</label>
            <textarea name='comments' onChange={this.onChange} value={this.state.value} />
            <br />
            <label htmlFor="">Choose Animal</label>
            <select onChange={this.onChange} name="animal" id="">
            <option value="dog">dog</option>
            <option value="cat">cat</option>
            <option value="bunny">bunny</option>
            </select>
            <input type="submit" value="submit" />
         </form>
      )
   }
}

export default MyForm;