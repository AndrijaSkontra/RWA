import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ChinaBlockerGuard implements CanActivate {

  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();

    const header = request.headers['x-country'];

    console.log("Header >> " + header)

    const forbiddenCountries = ['PRC', 'People’s Republic of China', 'China', 'France']

    return !forbiddenCountries.includes(header);
  }
}
