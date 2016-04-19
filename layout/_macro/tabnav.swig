{% macro render(item) %}
<div id="_tabnav" class="tab-nav">
    <ul>
        {% if item == "index" %}
        <li class="active"><a href="/#_tabnav">最新</a></li>
        <li><a href="/tags#_tabnav">标签</a></li>
        <li><a href="/categories#_tabnav">分类</a></li>
        <li><a href="/archives#_tabnav">归档</a></li>
        {% elseif item == "tags" %}
        <li><a href="/#_tabnav">最新</a></li>
        <li class="active"><a href="/tags#_tabnav">标签</a></li>
        <li><a href="/categories#_tabnav">分类</a></li>
        <li><a href="/archives#_tabnav">归档</a></li>
        {% elseif item == "cats" %}
        <li><a href="/#_tabnav">最新</a></li>
        <li><a href="/tags#_tabnav">标签</a></li>
        <li class="active"><a href="/categories">分类</a></li>
        <li><a href="/archives#_tabnav">归档</a></li>
        {% elseif item == "archives" %}
        <li><a href="/#_tabnav">最新</a></li>
        <li><a href="/tags#_tabnav">标签</a></li>
        <li><a href="/categories#_tabnav">分类</a></li>
        <li class="active"><a href="/archives#_tabnav">归档</a></li>
        {% endif %}
    </ul>
</div>
{% endmacro %}