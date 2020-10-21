// import app from '../../src/App.vue';

describe('Input get\'s a number and add it to link',()=> {
  it('input is added to the link', () =>{
    const input = '0545885765';
    const output = `https://api.whatsapp.com/send?phone=0545885765&text=&source=&data=&app_absent=`;
    expect(getLink(input)).toEqual(output)
  })

})

// function getLink(num) {
//   const linkTemplate = `https://api.whatsapp.com/send?phone=${num}&text=&source=&data=&app_absent=`;
//   return linkTemplate
// }
