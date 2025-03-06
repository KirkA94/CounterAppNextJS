function Table(props){

return(
    <table>
<thead>
<tr>

<th>Name</th>
<th>URL</th>

</tr>
</thead>
<tbody>

<tr>
<td>Kirk</td>
<td>Youtube.com/@KTF_TV</td>
</tr>

<tr>
    <td>{props.data.Name}</td>
    <td>{props.data.URL}</td>
</tr>

</tbody>




    </table>
)



}
export default Table