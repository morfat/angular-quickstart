
export class PageLink{
    is_active:boolean;
    is_break:boolean;
    number:number;
    url:any;
}
export class HtmlContext{
    next_url:any;
    previous_url:any;
    page_links:PageLink;
}


export class Pagination{
    count:number;
    current_page:number;
    start_index:number;
    end_index:number;
    num_pages:number;
    html_context:HtmlContext;

}