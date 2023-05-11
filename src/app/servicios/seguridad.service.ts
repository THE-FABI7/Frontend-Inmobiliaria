import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configuracionRutasBackend } from '../config/configuracion.rutas.backend';
import { usuarioModel } from '../modelos/usuario.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { usuarioValidadoModel } from '../modelos/usuario.validado.model';
import { permisosModel } from '../modelos/permisos.model';
import { itenMenuModel } from '../modelos/item.menu.model';
import { configuracionRutasMenuLateral } from '../config/configuracion.menu.lateral';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  urlBase: string = configuracionRutasBackend.urlSeguridad;

  constructor(private http: HttpClient) {
    this.ValidaCionDeSesion();
  }

  /**
   * Esta función envía una solicitud POST para identificar a un usuario con un correo electrónico y una
   * contraseña determinados.
   * @param {string} usuario - Una cadena que representa el nombre de usuario o el correo electrónico
   * del usuario que intenta iniciar sesión.
   * @param {string} clave - El parámetro "clave" es una cadena que representa la contraseña o clave
   * secreta de un usuario.
   * @returns Se está devolviendo un Observable de tipo `usuarioModel`. La función `IdentificarUsuario`
   * está realizando una solicitud POST al extremo `identificar-usuario` con los parámetros `usuario` y
   * `clave` proporcionados. Se espera que la respuesta del servidor sea un objeto de tipo
   * `usuarioModel`, que luego se devuelve como un Observable.
   */
  IdentificarUsuario(usuario: string, clave: string): Observable<usuarioModel> {
    return this.http.post<usuarioModel>(`${this.urlBase}identificar-usuario`, {
      correo: usuario,
      clave: clave,
    });
  }

  /**
   * Esta función almacena datos de usuarios identificados en el almacenamiento local y devuelve un
   * valor booleano que indica éxito o fracaso.
   * @param {usuarioModel} datos - usuarioModel, que es un modelo de datos que representa la información
   * del usuario.
   * @returns un valor booleano. Si ya hay datos de usuario almacenados en el almacenamiento local,
   * devuelve falso. De lo contrario, almacena los datos de usuario proporcionados y devuelve verdadero.
   */
  AlmacenarDatosUsuarioIdentificado(datos: usuarioModel): boolean {
    let cadena = JSON.stringify(datos);
    try {
      let objeto = JSON.parse(cadena) as usuarioModel;
      console.log(objeto);
    } catch (error) {
      console.log(error);
    }
    let datosLS = localStorage.getItem('datos-usuario');
    if (datosLS !== null && datosLS !== undefined) {
      return false;
    } else {
      localStorage.setItem('datos-usuario', cadena);
      return true;
    }
  }

  /**
   * La función elimina los datos de usuario no válidos del almacenamiento local.
   */
  RemoverDatosUsuarioValidado() {
    let datosUsuario = localStorage.getItem('datos-usuario');
    let datosSesion = localStorage.getItem('datos-sesion');

    if (datosUsuario) {
      localStorage.removeItem('datos-usuario');
    }
    if (datosSesion) {
      localStorage.removeItem('datos-sesion');
    }

    this.ActualizarComportamientoDeUsuario(new usuarioValidadoModel());
  }

  /**
   * Esta función recupera datos de usuario del almacenamiento local y los devuelve como un modelo de
   * usuario o nulo si no existe.
   * @returns ya sea un objeto de tipo `usuarioModel` o `null`.
   */
  obtenerDatosUsuarioLS(): usuarioModel | null {
    let datosLS = localStorage.getItem('datos-usuario');
    if (datosLS) {
      let datos = JSON.parse(datosLS);
      return datos;
    } else {
      return null;
    }
  }

  /**
   * Esta función envía una solicitud POST para verificar un código de autenticación de dos factores
   * para un usuario.
   * @param {string} idUser - La identificación del usuario cuyo código 2FA necesita ser validado.
   * @param {string} codigo - El parámetro "código" es una cadena que representa el código 2FA ingresado
   * por el usuario para su verificación.
   * @returns Se devuelve un Observable de tipo objeto.
   */
  validarCodigo2FA(
    idUser: string,
    codigo: string
  ): Observable<usuarioValidadoModel> {
    return this.http.post<usuarioValidadoModel>(
      `${this.urlBase}verificar-2fa`,
      {
        usuarioId: idUser,
        codigo2fa: codigo,
      }
    );
  }

  /**
   * Esta función envía una solicitud POST a una URL específica con un código hash y devuelve un
   * Observable de tipo booleano.
   * @param {string} hash - El parámetro `hash` es una cadena que representa un código único que se
   * utiliza para identificar a un usuario en un contexto público. La función
   * `validarHashUsuarioPublico` toma este hash como entrada y envía una solicitud POST a un servidor
   * para verificar si el hash es válido para un usuario en particular. El
   * @returns La función `validarHashUsuarioPublico` está devolviendo un Observable de tipo booleano.
   * Está realizando una solicitud POST a una URL específica con un código hash como parámetro y espera
   * un valor booleano en respuesta.
   */
  validarHashUsuarioPublico(hash: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.urlBase}validar-hash-usuario`, {
      codigoHash: hash,
    });
  }

  /**
   * Esta función registra a un usuario público mediante el envío de sus datos a un servidor utilizando
   * el método HTTP POST y devuelve un observable del modelo del usuario registrado.
   * @param {any} datos - El parámetro "datos" es del tipo "cualquiera" y probablemente sea un objeto
   * que contenga datos relacionados con un usuario. Estos datos pueden incluir información como el
   * nombre del usuario, correo electrónico, contraseña y cualquier otro detalle relevante necesario
   * para crear una nueva cuenta de usuario. La función "RegistrarUsuarioPublico"
   * @returns Se está devolviendo un Observable de tipo `usuarioModel`. El método `http.post` se utiliza
   * para enviar una solicitud HTTP POST a la URL especificada con los datos proporcionados (`datos`)
   * como cuerpo de la solicitud. Se espera que la respuesta del servidor sea del tipo `usuarioModel`,
   * que luego se devuelve como un Observable.
   */
  RegistrarUsuarioPublico(datos: any): Observable<usuarioModel> {
    return this.http.post<usuarioModel>(
      `${this.urlBase}usuario-publico`,
      datos
    );
  }

  RecuperarClavePorUsuario(usuario: string): Observable<usuarioModel> {
    return this.http.post<usuarioModel>(`${this.urlBase}recuperar-clave`, {
      correo: usuario,
    });
  }

  /**
   * Esta función almacena datos de usuario validados en el almacenamiento local si aún no existe.
   * @param {usuarioValidadoModel} datos - usuarioValidadoModel, que es probablemente un modelo o
   * interfaz que representa datos de usuario validados.
   * @returns Se devuelve un valor booleano. Si `datosLS` no es nulo, la función devuelve `falso`, lo
   * que indica que los datos del usuario ya se han almacenado en el almacenamiento local. Si `datosLS`
   * es nulo, la función almacena los datos del usuario en el almacenamiento local y devuelve `true`, lo
   * que indica que los datos se han almacenado correctamente.
   */
  AlmacenarDatosUsuarioValidado(datos: usuarioValidadoModel): boolean {
    let datosLS = localStorage.getItem('datos-sesion');
    if (datosLS != null) {
      return false;
    } else {
      let datosString = JSON.stringify(datos);
      localStorage.setItem('datos-sesion', datosString);
      return true;
    }
  }

  // Administracion de la sesion de usuario
  datosUsuarioValidado = new BehaviorSubject<usuarioValidadoModel>(
    new usuarioValidadoModel()
  );
  ObtenerDatosSesion(): Observable<usuarioValidadoModel> {
    return this.datosUsuarioValidado.asObservable();
  }

  /**
   * Esta función verifica si hay datos de sesión almacenados en el almacenamiento local y actualiza el
   * comportamiento del usuario en consecuencia.
   */
  ValidaCionDeSesion() {
    let ls = localStorage.getItem('datos-sesion');
    if (ls) {
      let objUsuario = JSON.parse(ls);
      this.ActualizarComportamientoDeUsuario(objUsuario);
    }
  }
  /**
   * Esta función actualiza el comportamiento de un usuario validado con nuevos datos.
   * @param {usuarioValidadoModel} datos - usuarioValidadoModel, que es probablemente un modelo o
   * interfaz que representa datos de usuario validados. El método actualiza el comportamiento del
   * usuario pasando los datos actualizados al asunto "datosUsuarioValidado" mediante el método
   * "siguiente".
   * @returns El método `ActualizarComportamientoDeUsuario` está devolviendo el resultado de llamar al
   * método `next` sobre el asunto `datosUsuarioValidado` con el parámetro `datos` como argumento.
   */

  ActualizarComportamientoDeUsuario(datos: usuarioValidadoModel) {
    return this.datosUsuarioValidado.next(datos);
  }

  ConstruirMenuLateral(permisos: permisosModel[]): itenMenuModel[] {
    let menu: itenMenuModel[] = [];
    permisos.forEach((permiso) => {
      let datosRuta = configuracionRutasMenuLateral.ListaMenus.filter(
        (x) => x.id == permiso.menuId
      );

      if (datosRuta.length > 0) {
        let item = new itenMenuModel();
        item.idMenu = permiso.menuId;
        item.ruta = datosRuta[0].ruta;
        item.icono = datosRuta[0].icono;
        item.texto = datosRuta[0].texto;
        menu.push(item);
      }
    });
    return menu;
  }
}
