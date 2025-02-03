import React from 'react'
import "./profile.css"

 function Profile() {
  return (
    <div >
        <div className='ti'>Coding profile</div>
        <div className='button'>
         <a href="https://leetcode.com/kaveyan07/"><button>Leedcode</button></a>
         <a href="https://auth.geeksforgeeks.org/user/kaveyan/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"><button>Geeksforgeeks</button></a>
         <a href="https://www.codechef.com/users/kaveyanb"><button>Codechef</button></a>
        </div>

    </div>
  )
}
export{Profile}


