import Dashboard from '../Dashboard';

function Text () {

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);
    
            return dispatch(Post.create({ email, username, password }))
                .catch (async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
    }
    
    return (
        <div>
            <div>
                <form method={post} action='/dashboard/text'>
                    <input placeholder='title' />
                    <input placeholder='text'/>
                    <button type='submit' onClick={handleSubmit}></button>
                </form>
            </div>
            <Dashboard />
        </div>
    )
}
