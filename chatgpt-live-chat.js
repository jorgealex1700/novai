jQuery(document).ready( function($) {
    // Handle form submission
    $('#chatgpt-submit').click( function(e) {
        e.preventDefault();

        // Get the prompt
        var prompt = $('#chatgpt-prompt').val();

        // Send the request to the OpenAI API
        $.ajax({
            url: chatgpt_vars.endpoint,
            type: 'POST',
            data: JSON.stringify({
                prompt: prompt,
                temperature: 0.5,
                max_tokens: 20,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + chatgpt_vars.api_key
            },
            success: function(response) {
                // Display the response
                $('#chatgpt-response').html(response.choices[0].text);
            },
            error: function(xhr, status, error) {
                // Display the error
                $('#chatgpt-response').html('Error: ' + error);
            }
        });
    });
});
