
export const FormList = ({data}) => {
    return(
        <table>
            <tr>
                <th>{data.name}</th>
                <th>{data.age}</th>
                <th>{data.address}</th>
                <th>{data.department}</th>
                <th>{data.salary}</th>
                <th>{data.marital}</th>
            </tr>
        </table>
     )
}