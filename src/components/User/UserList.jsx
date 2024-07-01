
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 17,
        height: 17,
        margin: 2,
    },
}));

function User({ role }) {
    return (
        <div className="w-full flex justify-between items-center">
            <h5>Jhon Doe</h5>
            <h6>Role-{role}</h6>
            <div>
                <Android12Switch />
            </div>
        </div>
    )
}

function UserList() {
    return (
        <div>
            <User role={"Job post Manager"} />
            <User role={"Account Manager"} />
            <User role={"JD Manager"} />
        </div>
    )
}

export default UserList