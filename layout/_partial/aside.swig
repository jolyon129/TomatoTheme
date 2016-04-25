<div class="aside">
    <div class="basic-info">
        <div class="avatar">
            <img src="{{ theme.avatar }}" alt="100">
        </div>
        <div class="intro">
            <h2>{{config.author}}</h2>
                <span><i>
                    "{{ theme.quote }}"
                </i></span>
        </div>
        <div class="sns">
            <a target="_blank" href="http://weibo.com/lzlun129"><i class="iconfont icon-weibo"></i></a>
            <a target="_blank" href="https://www.zhihu.com/people/jolyon129"><i class="iconfont icon-zhihu"></i></a>
            <a target="_blank" href="https://github.com/jolyon129"><i class="iconfont icon-github"></i></a>
            <a target="_blank" href="https://twitter.com/jolyon129"><i class="iconfont icon-twitter"></i></a>
            <a target="_blank" href="https://www.facebook.com/jolyon129"><i class="iconfont icon-facebook"></i></a>
        </div>
        <div class="blog-info">
            <div class="copyright">
                {% set current = date(Date.now(), "YYYY") %}
                <i class="iconfont icon-copyright-copy"></i>
                <i>{% if theme.since and theme.since != current %} {{ theme.since }} - {% endif %}
                <span itemprop="copyrightYear">{{ current }}</span>
                </i>
                <i class="iconfont icon-love"></i><i>Jolyon</i>
            </div>
            <div class="source-info"><i>Theme <a target="_blank" href="https://github.com/jolyon129/TomatoTheme">Tomato</a> created by <a target="_blank" href="https://github.com/jolyon129">Jolyon</a> </i></div>
        </div>
    </div>
</div>