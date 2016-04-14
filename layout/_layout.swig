<!DOCTYPE html>
<html lang="en">
<head>
    {% include '_partial/head.swig' %}
    <title>{% block title %}{% endblock %}</title>
</head>
<body class="night">
<div class="container">
    <div class="sidebar">
    </div>
    {% include '_partial/mb-headbar.swig' %}
    <div class="main-container">
        <div class="aside"></div>
        <div class="main-wrapper">
            {% block tabnav %}{% endblock %}
            <div class="tab-content">
                {% block content %}{% endblock %}
            </div>
        </div>
    </div>
</div>
<script>

</script>
{% block script%}{% endblock %}
</body>
</html>