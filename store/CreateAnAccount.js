export default {
    heading:'Create An Account',
    main:`
    <form id="create-account-form" action='#'>
    <div>
        <h4>First Name</h4>
        <input type="text" name="fname" id="first_name">

        <h4>Last Name</h4>
        <input type="text" name="lname" id="last_name">
    
        <h4>Email Address</h4>
        <input type="email" name="email" id="email">
    
        <h4>Username</h4>
        <input type="text" name="username" id="username">
    
        <h4>Password</h4>
        <input type="password" name="new-password" id="password">
    
        <h4>Confirm Password</h4>
        <input type="password" name="new-password" id="password_confirm">
    </div>
</form>
<br>
<button type="submit" value="Create An Account" id="create-account">Create Your Account</button> 
`

};