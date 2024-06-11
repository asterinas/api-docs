(function() {var type_impls = {
"spin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Barrier%3CR%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/barrier.rs.html#72-132\">source</a><a href=\"#impl-Barrier%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R: <a class=\"trait\" href=\"spin/relax/trait.RelaxStrategy.html\" title=\"trait spin::relax::RelaxStrategy\">RelaxStrategy</a>&gt; <a class=\"struct\" href=\"spin/barrier/struct.Barrier.html\" title=\"struct spin::barrier::Barrier\">Barrier</a>&lt;R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.wait\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/barrier.rs.html#110-131\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/barrier/struct.Barrier.html#tymethod.wait\" class=\"fn\">wait</a>(&amp;self) -&gt; <a class=\"struct\" href=\"spin/barrier/struct.BarrierWaitResult.html\" title=\"struct spin::barrier::BarrierWaitResult\">BarrierWaitResult</a></h4></section></summary><div class=\"docblock\"><p>Blocks the current thread until all threads have rendezvoused here.</p>\n<p>Barriers are re-usable after all threads have rendezvoused once, and can\nbe used continuously.</p>\n<p>A single (arbitrary) thread will receive a <a href=\"struct.BarrierWaitResult.html\"><code>BarrierWaitResult</code></a> that\nreturns <code>true</code> from <a href=\"struct.BarrierWaitResult.html#method.is_leader\"><code>is_leader</code></a> when returning from this function, and\nall other threads will receive a result that will return <code>false</code> from\n<a href=\"struct.BarrierWaitResult.html#method.is_leader\"><code>is_leader</code></a>.</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>spin;\n<span class=\"kw\">use </span>std::sync::Arc;\n<span class=\"kw\">use </span>std::thread;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>handles = Vec::with_capacity(<span class=\"number\">10</span>);\n<span class=\"kw\">let </span>barrier = Arc::new(spin::Barrier::new(<span class=\"number\">10</span>));\n<span class=\"kw\">for _ in </span><span class=\"number\">0</span>..<span class=\"number\">10 </span>{\n    <span class=\"kw\">let </span>c = barrier.clone();\n    <span class=\"comment\">// The same messages will be printed together.\n    // You will NOT see any interleaving.\n    </span>handles.push(thread::spawn(<span class=\"kw\">move</span>|| {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"before wait\"</span>);\n        c.wait();\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"after wait\"</span>);\n    }));\n}\n<span class=\"comment\">// Wait for other threads to finish.\n</span><span class=\"kw\">for </span>handle <span class=\"kw\">in </span>handles {\n    handle.join().unwrap();\n}</code></pre></div>\n</div></details></div></details>",0,"spin::Barrier"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Barrier%3CR%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/barrier.rs.html#134-159\">source</a><a href=\"#impl-Barrier%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; <a class=\"struct\" href=\"spin/barrier/struct.Barrier.html\" title=\"struct spin::barrier::Barrier\">Barrier</a>&lt;R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/barrier.rs.html#150-158\">source</a><h4 class=\"code-header\">pub const fn <a href=\"spin/barrier/struct.Barrier.html#tymethod.new\" class=\"fn\">new</a>(n: usize) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new barrier that can block a given number of threads.</p>\n<p>A barrier will block <code>n</code>-1 threads which call <a href=\"#method.wait\"><code>wait</code></a> and then wake up\nall threads at once when the <code>n</code>th thread calls <a href=\"#method.wait\"><code>wait</code></a>. A Barrier created\nwith n = 0 will behave identically to one created with n = 1.</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>spin;\n\n<span class=\"kw\">let </span>barrier = spin::Barrier::new(<span class=\"number\">10</span>);</code></pre></div>\n</div></details></div></details>",0,"spin::Barrier"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()