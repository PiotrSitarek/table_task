import React, { useContext, useState, useEffect } from 'react';
import { opisContext } from '../context/opisContext';

const Table = () => {
    const description = useContext(opisContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://sitar05.vot.pl/dane.json`)
            .then((response) => response.json())
            .then((response) => setData(response.data))
    }, []);


    useEffect(() => {
        if (description.length === 0) {
            return null
        } else {
            const taskTable = document.getElementById('taskTable');
            taskTable.innerHTML = '';
            const tableHeadRow = document.createElement("tr");
            taskTable.appendChild(tableHeadRow);
            description.viewParams.rows[3].attributes.forEach((element) => {
                const tableHead = document.createElement("th");
                tableHead.classList.add("tableHead");
                tableHeadRow.appendChild(tableHead);
                tableHead.innerHTML = `${element.label}`
            })

            data.forEach((element) => {
                const dataRow = document.createElement("tr");
                taskTable.appendChild(dataRow);

                const alarm_status = document.createElement("td");
                dataRow.appendChild(alarm_status);
                alarm_status.classList.add("dataCell");
                alarm_status.innerHTML = `${element.alarm_status}`;

                const alarm_severity = document.createElement("td");
                dataRow.appendChild(alarm_severity);
                alarm_severity.classList.add("dataCell");
                alarm_severity.setAttribute("contenteditable", "true");
                alarm_severity.innerHTML = `${element.alarm_severity}`;

                const comment = document.createElement("td");
                dataRow.appendChild(comment);
                comment.classList.add("dataCell");
                comment.innerHTML = `${element.comment}`;

                const alarm_application = document.createElement("td");
                dataRow.appendChild(alarm_application);
                alarm_application.classList.add("dataCell");
                alarm_application.innerHTML = `${element.alarm_application}`;

                const alarm_node = document.createElement("td");
                dataRow.appendChild(alarm_node);
                alarm_node.classList.add("dataCell");
                alarm_node.innerHTML = `${element.alarm_node}`;

                const alarm_object = document.createElement("td");
                dataRow.appendChild(alarm_object);
                alarm_object.classList.add("dataCell");
                alarm_object.innerHTML = `${element.alarm_object}`;

                const alarm_textlong = document.createElement("td");
                dataRow.appendChild(alarm_textlong);
                alarm_textlong.classList.add("dataCell");
                alarm_textlong.innerHTML = `${element.alarm_textlong}`;

                const alarm_firstevent_ts = document.createElement("td");
                dataRow.appendChild(alarm_firstevent_ts);
                alarm_firstevent_ts.classList.add("dataCell");
                alarm_firstevent_ts.innerHTML = `${element.alarm_firstevent_ts}`;

                const alarm_lastevent_ts = document.createElement("td");
                dataRow.appendChild(alarm_lastevent_ts);
                alarm_lastevent_ts.classList.add("dataCell");
                alarm_lastevent_ts.innerHTML = `${element.alarm_lastevent_ts}`;

                const alarm_lastupdate_ts = document.createElement("td");
                dataRow.appendChild(alarm_lastupdate_ts);
                alarm_lastupdate_ts.classList.add("dataCell");
                alarm_lastupdate_ts.innerHTML = `${element.alarm_lastupdate_ts}`;

                const alarm_count = document.createElement("td");
                dataRow.appendChild(alarm_count);
                alarm_count.classList.add("dataCell");
                alarm_count.innerHTML = `${element.alarm_count}`;

                const alarm_procedure = document.createElement("td");
                dataRow.appendChild(alarm_procedure);
                alarm_procedure.classList.add("dataCell");
                alarm_procedure.innerHTML = `${element.alarm_procedure}`;

                const itcust_impactedserviceslabels = document.createElement("td");
                dataRow.appendChild(itcust_impactedserviceslabels);
                itcust_impactedserviceslabels.classList.add("dataCell");
                itcust_impactedserviceslabels.innerHTML = `${element.itcust_impactedserviceslabels}`;

                const id = document.createElement("td");
                dataRow.appendChild(id);
                id.classList.add("dataCell");
                id.innerHTML = `${element.id}`;

                const alarm_duration = document.createElement("td");
                dataRow.appendChild(alarm_duration);
                alarm_duration.classList.add("dataCell");
                alarm_duration.innerHTML = `${element.alarm_duration}`;

                const gwnagios_ack_comment = document.createElement("td");
                dataRow.appendChild(gwnagios_ack_comment);
                gwnagios_ack_comment.classList.add("dataCell");
                gwnagios_ack_comment.innerHTML = `${element.gwnagios_ack_comment}`;

                const gwnagios_postpone_comment = document.createElement("td");
                dataRow.appendChild(gwnagios_postpone_comment);
                gwnagios_postpone_comment.classList.add("dataCell");
                gwnagios_postpone_comment.innerHTML = `${element.gwnagios_postpone_comment}`;

                const gwnagios_postpone_to = document.createElement("td");
                dataRow.appendChild(gwnagios_postpone_to);
                gwnagios_postpone_to.classList.add("dataCell");
                gwnagios_postpone_to.innerHTML = `${element.gwnagios_postpone_to}`;

                const test_select = document.createElement("td");
                dataRow.appendChild(test_select);
                test_select.classList.add("dataCell");
                test_select.innerHTML = `${element.test_select}`;

                const test_multiselect = document.createElement("td");
                dataRow.appendChild(test_multiselect);
                test_multiselect.classList.add("dataCell");
                test_multiselect.innerHTML = `${element.test_multiselect}`;

                const test_combo = document.createElement("td");
                dataRow.appendChild(test_combo);
                test_combo.classList.add("dataCell");
                test_combo.innerHTML = `${element.test_combo}`;

                const test_selecttr = document.createElement("td");
                dataRow.appendChild(test_selecttr);
                test_selecttr.classList.add("dataCell");
                test_selecttr.innerHTML = `${element.test_selecttr}`;

                const test_multiselecttr = document.createElement("td");
                dataRow.appendChild(test_multiselecttr);
                test_multiselecttr.classList.add("dataCell");
                test_multiselecttr.innerHTML = `${element.test_multiselecttr}`;

                const test_multicombo = document.createElement("td");
                dataRow.appendChild(test_multicombo);
                test_multicombo.classList.add("dataCell");
                test_multicombo.innerHTML = `${element.test_multicombo}`;

            })
        }
    }, [description]);

    return (
        <table id="taskTable" >
        </table>
    );
}
export default Table;