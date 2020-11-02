import React, {useState} from 'react'
import styled from 'styled-components';
import Wrapper from '../Wrapper';

const HeaderStyled = styled.div`
    background: var(--white);
    margin-bottom: 1em;
    box-shadow: 0 2px 4px 0 rgna(0,0,0,.05);
    .content {
        // height: 80px;
        display: flex;
        align-content: center;
        justify-content: space-between;
    }
`
function Header(props:any) {
	const [filter ,setFilter] = useState({})
	const {handleFilter} = props;

	const handleFilterValue = (event: any) =>{
		setFilter(state =>({
				...state,
				[event.target.name]: event.target.value}))
	}

	const handleSUbmit = () => {
			handleFilter(filter)
	}

	return (
			<Wrapper>
					<HeaderStyled>
							<div className="content">
									<label htmlFor="name">name</label>
									<input type="text" name="name" id="name" placeholder="Name" onChange={handleFilterValue} />
									<label htmlFor="status">Status</label>
									<select name="status" id="status"  placeholder="Gender" onChange={handleFilterValue}>
											<option value="alive">Alive</option>
											<option value="dead">Dead</option>
											<option value="Unknown">Unknown</option>
									</select>
									<label htmlFor="species">Species</label>
									<input type="text" id="species" name="species" placeholder="Species" onChange={handleFilterValue} />
									<label htmlFor="type">Type</label>
									<input type="text" id="type"  name="type" placeholder="Type" onChange={handleFilterValue} />
									<label htmlFor="gender">Gender</label>
									<select name="gender" id="gender" placeholder="Gender"  onChange={handleFilterValue}>
											<option>Female</option>
											<option>Male</option>
											<option>Genderless</option>
											<option>Unknown</option>
									</select>
									<button onClick={handleSUbmit}>Filter</button>
							</div>
					</HeaderStyled>
			</Wrapper>
    )
}

export default Header;
