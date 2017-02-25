<?php
namespace App\Listeners;
use Dingo\Api\Event\ResponseWasMorphed;

class ModifiedResponse
{
    public function handle(ResponseWasMorphed $event)
    {
        /*if (isset($event->content['meta']['pagination'])) {
            $links = $event->content['meta']['pagination']['links'];

            $event->response->headers->set(
                'link',
                sprintf('<%s>; rel="next", <%s>; rel="prev"', $links['links']['next'], $links['links']['previous'])
            );
        }*/

        if(isset($event->content['data']) && !isset($event->content['data'][0]) && count($event->content['data']) > 0){
            $response = [];
            array_push($response, $event->content['data']);
            $event->content['data'] = $response;

            if (isset($event->content['meta'])){
                if(isset($event->content['meta']['success']))
                    $event->content['success'] = $event->content['meta']['success'];
                else
                    $event->content['success'] = true;

                if(isset($event->content['meta']['message']))
                    $event->content['message'] = $event->content['meta']['message'];
                else
                    $event->content['message'] = "Request Completed Successfully";

                if(isset($event->content['meta']['errors']))
                    $event->content['errors'] = $event->content['meta']['errors'];
                else
                    $event->content['errors'] = (object)[];

                unset($event->content['meta']['message']);

                if(count($event->content['meta']) <= 0){
                    unset($event->content['meta']);
                }
            }else{
                $event->content['success'] = true;
                $event->content['message'] = "Request Completed Successfully";
                $event->content['errors'] = (object)[];
            }
        }
        /*if(isset($event->content['meta']['success'])){
            $event->response->headers->set(
                'success',
                $event->content['meta']['success']
            );
        }*/
    }
}