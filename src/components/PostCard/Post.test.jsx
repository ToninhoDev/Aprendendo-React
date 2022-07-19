import {render} from '@testing-library/react'
import {PostCard} from '.';

describe('<PostCard/>', () =>{
    it('Should render PostCard corretly', ()=>{
       render(<PostCard />) 
    })
});