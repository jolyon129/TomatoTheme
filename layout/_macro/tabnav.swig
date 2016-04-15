{% macro render(item) %}
<div class="tab-nav">
    <ul>
        {% if item == "index" %}
        <li class="active"><a href="/">最新</a></li>
        <li><a href="/tags">标签</a></li>
        <li><a href="/categories">分类</a></li>
        <li><a href="/archives">归档</a></li>
        {% elseif item == "tags" %}
        <li><a href="/">最新</a></li>
        <li class="active"><a href="/tags">标签</a></li>
        <li><a href="/categories">分类</a></li>
        <li><a href="/archives">归档</a></li>
        {% elseif item == "cats" %}
        <li><a href="/">最新</a></li>
        <li><a href="/tags">标签</a></li>
        <li class="active"><a href="/categories">分类</a></li>
        <li><a href="/archives">归档</a></li>
        {% elseif item == "archives" %}
        <li><a href="/">最新</a></li>
        <li><a href="/tags">标签</a></li>
        <li><a href="/categories">分类</a></li>
        <li class="active"><a href="/archives">归档</a></li>
        {% endif %}
    </ul>
</div>
{% endmacro %}