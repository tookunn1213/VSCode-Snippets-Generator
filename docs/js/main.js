const NAME_KEY = "name";
const PREFIX_KEY = "prefix";
const BODY_KEY = "body";
const DESCRIPTION_KEY = "description";

const escape_quotes = function (non_escaped) {
    return non_escaped.replace(/"/g,'\\"');
}

$('#output-button').click(function() {
    let name_text = escape_quotes($('#name-text').val());
    let prefix_text = escape_quotes($('#prefix-text').val());
    let body_text = $('#body-text').val();
    let description_text = escape_quotes($('#description-text').val());

    let body_lines = body_text.split("\n");
    body_lines = body_lines.map(function(element){
        return '"' + escape_quotes(element) + '"';
    });

    let joined_body_lines = body_lines.join(",\n");

    let output_text = 
`"${name_text}" : {
    "${PREFIX_KEY}" : "${prefix_text}",
    "${BODY_KEY}" : [
${joined_body_lines}
    ],
    "${DESCRIPTION_KEY}" : "${description_text}"
}
`;

    $('#output-text').val(output_text);
});