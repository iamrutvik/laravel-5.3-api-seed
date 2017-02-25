<?php
// config
$link_limit = 7; // maximum number of links (a little bit inaccurate, but will be ok for now)
//echo count($paginator); exit;
?>
@if ($paginator->lastPage() > 1)
    <ul class="pagi fr">
        <li class="paginate_button {{ ($paginator->currentPage() == 1) ? ' disabled' : '' }} previous">
            <a href="{{ $paginator->url(1) }}">First</a>
         </li>
        @for ($i = 1; $i <= $paginator->lastPage(); $i++)
            <?php
            $half_total_links = floor($link_limit / 2);
            $from = $paginator->currentPage() - $half_total_links;
            $to = $paginator->currentPage() + $half_total_links;
            if ($paginator->currentPage() < $half_total_links) {
               $to += $half_total_links - $paginator->currentPage();
            }
            if ($paginator->lastPage() - $paginator->currentPage() < $half_total_links) {
                $from -= $half_total_links - ($paginator->lastPage() - $paginator->currentPage()) - 1;
            }
            ?>
            @if ($from < $i && $i < $to)
                <li class="paginate_button {{ ($paginator->currentPage() == $i) ? ' active' : '' }}">
                    <a href="{{ $paginator->url($i) }}">{{ $i }}</a>
                </li>
            @endif
        @endfor
        <li class="paginate_button {{ ($paginator->currentPage() == $paginator->lastPage()) ? ' disabled' : '' }} next">
            <a href="{{ $paginator->url($paginator->lastPage()) }}">Last</a>
        </li>
    </ul>
@endif